import { PrismaClient, Prisma } from '@prisma/client';
import { Docker } from 'node-docker-api';

export class Global {
  static prisma: PrismaClient;

  static docker: Docker;

  static async initDb() {
    this.prisma = new PrismaClient();
  }

  static initDocker() {this.docker = new Docker({ socketPath: '/var/run/docker.sock' });}
}

