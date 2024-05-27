import ViteReplaceImport from '.';
import { test, expect } from 'vitest';

test('No replace queryKey or value', () => {
  const { resolveId } = ViteReplaceImport({ queryKey: 'replace' });
  expect(typeof resolveId).toBe('function');
  if (typeof resolveId !== 'function') {
    return;
  }
  const resolveIdShort = (url: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return resolveId.call({} as any, url, undefined, {} as any);
  }
  {
    const newUrl = resolveIdShort('./ab/c.js?b=22&bb=343');
    const targetUrl = './ab/c.js?b=22&bb=343'
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort('./ab/c?replace&b=22&bb=343');
    const targetUrl = './ab/c?b=22&bb=343'
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort('./ab/c?b=22&replace=&bb=343');
    const targetUrl = './ab/c?b=22&bb=343'
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort('./ab/c.js?b=22&replace&bb=343');
    const targetUrl = './ab/c.js?b=22&bb=343'
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort('./ab/c.js?b=22&bb=343&replace');
    const targetUrl = './ab/c.js?b=22&bb=343'
    expect(newUrl).toBe(targetUrl);
  }
});

test('Has replace queryKey and value', () => {
  const { resolveId } = ViteReplaceImport({ queryKey: 'replace' });
  expect(typeof resolveId).toBe('function');
  if (typeof resolveId !== 'function') {
    return;
  }

  const value = '23';
  const resolveIdShort = (url: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return resolveId.call({} as any, url, undefined, {} as any);
  }
  {
    const newUrl = resolveIdShort(`./ab/c?b=22&replace=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort(`./ab/c.js?b=22&replace=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}.js?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort(`./ab/c.ts?b=22&replace=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}.ts?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort(`./ab/c.ts?replace=${value}&b=22&bb=343`);
    const targetUrl = `./ab/c.${value}.ts?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort(`./ab/c.min.js?b=22&replace=${value}&bb=343`);
    const targetUrl = `./ab/c.min.${value}.js?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort(`./ab/c.vue?b=22&replace=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}.vue?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const newUrl = resolveIdShort(`./ab/c.vue?b=22&bb=343&replace=${value}`);
    const targetUrl = `./ab/c.${value}.vue?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
});


test('Custom replace queryKey and value', () => {
  const key = 'substitute';
  const { resolveId } = ViteReplaceImport({ queryKey: key });
  expect(typeof resolveId).toBe('function');
  if (typeof resolveId !== 'function') {
    return;
  }

  const value = '23';
  const resolveIdShort = (url: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return resolveId.call({} as any, url, undefined, {} as any);
  }
  {
    const newUrl = resolveIdShort(`./ab/c?b=22&${key}=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const value = '23';
    const newUrl = resolveIdShort(`./ab/c.js?b=22&${key}=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}.js?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const value = '23';
    const newUrl = resolveIdShort(`./ab/c.ts?b=22&${key}=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}.ts?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const value = '23';
    const newUrl = resolveIdShort(`./ab/c.min.js?b=22&${key}=${value}&bb=343`);
    const targetUrl = `./ab/c.min.${value}.js?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
  {
    const value = '23';
    const newUrl = resolveIdShort(`./ab/c.vue?b=22&${key}=${value}&bb=343`);
    const targetUrl = `./ab/c.${value}.vue?b=22&bb=343`
    expect(newUrl).toBe(targetUrl);
  }
});