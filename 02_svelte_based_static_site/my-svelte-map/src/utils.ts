import yaml from 'js-yaml';

export async function loadYAML(filePath: string): Promise<any> {
  const response = await fetch(filePath);
  const text = await response.text();
  return yaml.load(text);
}
