import { IPlugin } from '@/utils/types/plugin';
import pluginsData from '../data/plugins/plugins.json';

export function getAllPlugins(locale: string) {
  if (locale === 'pt') return pluginsData.pt;
  return pluginsData.en as IPlugin[];
}

export function getPluginByPath(locale: string, path: string) {
  const AllPlugins = getAllPlugins(locale);
  return AllPlugins.find(plugin => plugin.path === path) as IPlugin;
}
