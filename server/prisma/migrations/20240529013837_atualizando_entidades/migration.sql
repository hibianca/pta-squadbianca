/*
  Warnings:

  - You are about to drop the column `age` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `date` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participants` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plataform` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacancies` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" DROP COLUMN "age",
DROP COLUMN "name",
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "hour" TEXT NOT NULL,
ADD COLUMN     "participants" INTEGER NOT NULL,
ADD COLUMN     "plataform" TEXT NOT NULL,
ADD COLUMN     "vacancies" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";
