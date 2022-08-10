import { PrismaClient } from '@prisma/client';

export class Global {
  static prisma: PrismaClient;

  static async initDb() {
    this.prisma = new PrismaClient();
  }
}
