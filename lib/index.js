import pluginsData from '../data/plugins/plugins.json';

export function getAllPlugins() {
  return pluginsData.en;
}

export function getPluginByTitle(title) {
  return pluginsData.en.find((plugin) => plugin.title === title);
}

export function getPluginByPatch(patch) {
  return pluginsData.en.find((plugin) => plugin.patch === patch);
}
