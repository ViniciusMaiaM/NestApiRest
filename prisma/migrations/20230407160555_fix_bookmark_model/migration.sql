/*
  Warnings:

  - The primary key for the `bookmarks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `bookmarks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "bookmarks_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "bookmarks_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "bookmarks_id_key" ON "bookmarks"("id");
