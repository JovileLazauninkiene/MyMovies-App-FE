import { get } from './shared/methods';

interface StatusInfo {
  health: boolean;
  version: string;
}

export async function fetchStatus(): Promise<StatusInfo> {
  const { data } = await get<StatusInfo>('health');
  console.log(data);
  return data;
}
