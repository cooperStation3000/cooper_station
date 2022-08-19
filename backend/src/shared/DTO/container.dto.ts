import { T_container } from './dto';

export type T_container_create = Pick<T_container, 'projectId' | 'tag' | 'port' | 'nginxUrl'>;

export type T_container_find_one = Pick<T_container, 'tag' | 'projectId' | 'id'>

export type T_container_update_one = {
  id: number,
  info: Pick<T_container, 'tag' | 'port' | 'nginxUrl'>
}

// docker-container 类型
export interface T_docker_container {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  Ports: Port[];
  Labels: Record<string, any>;
  State: string;
  Status: string;
  HostConfig: HostConfig;
  NetworkSettings: NetworkSettings;
  Mounts: Mount[];
}

export interface HostConfig {
  NetworkMode: string;
}

export interface Mount {
  Type: string;
  Name?: string;
  Source: string;
  Destination: string;
  Driver?: string;
  Mode: string;
  RW: boolean;
  Propagation: string;
}

export interface NetworkSettings {
  Networks: Networks;
}

export interface Networks {
  bridge: Bridge;
}

export interface Bridge {
  IPAMConfig: null;
  Links: null;
  Aliases: null;
  NetworkID: string;
  EndpointID: string;
  Gateway: string;
  IPAddress: string;
  IPPrefixLen: number;
  IPv6Gateway: string;
  GlobalIPv6Address: string;
  GlobalIPv6PrefixLen: number;
  MacAddress: string;
  DriverOpts: null;
}

export interface Port {
  IP: string;
  PrivatePort: number;
  PublicPort: number;
  Type: string;
}

