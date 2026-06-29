/*
  Warnings:

  - You are about to drop the column `vendedorId` on the `Venta` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_vendedorId_fkey";

-- DropIndex
DROP INDEX "Venta_vendedorId_idx";

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "vendedorId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Venta_userId_idx" ON "Venta"("userId");

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
