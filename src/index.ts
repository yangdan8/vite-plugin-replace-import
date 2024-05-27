import type { Plugin } from 'vite';

interface ViteReplaceImportOptions {
  disabled?: boolean;
  queryKey?: string;
}

function getPathnameAndSearch(source: string) {
  const regex = /^(.*?)(\?.*)?$/;
  const match = source.match(regex) || [];
  const filePath = match[1];
  const search = match[2]?.substring(1) ?? '';
  return { filePath, search };
}

function getPathWithReplace(source: string, queryKey: string) {
  const { filePath, search } = getPathnameAndSearch(source);
  const searchParams = new URLSearchParams(search);
  const replaceVar = searchParams.get(queryKey);
  if (replaceVar === null) {
    return null;
  }
  searchParams.delete(queryKey);
  const newSearch = searchParams.toString();

  const partsBySep = filePath.split('/');
  if (replaceVar) {
    const parts = partsBySep[partsBySep.length - 1].split('.');
    if (parts.length <= 1) {
      parts.push(replaceVar);
    } else {
      parts.splice(parts.length - 1, 0, replaceVar);
    }
    const str = parts.join('.');
    partsBySep[partsBySep.length - 1] = str;
  }
  const newFilePath = partsBySep.join('/');
  const newPath = [newFilePath, newSearch].join('?');
  return newPath;
}

export default function ViteReplaceImport(options: Partial<ViteReplaceImportOptions> = {}): Plugin {
  const queryKey = options.queryKey || 'replace';

  return {
    name: 'vite-plugin-place-import',
    resolveId(source) {
      if (!options.disabled) {
        const newPath = getPathWithReplace(source, queryKey);
        if (newPath) {
          return newPath;
        }
      }
      return source;
    },
  };
}
