/*
  Warnings:

  - You are about to drop the `ProjectInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectInfoToTecnology` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `client` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_infoId_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectInfoToTecnology" DROP CONSTRAINT "_ProjectInfoToTecnology_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectInfoToTecnology" DROP CONSTRAINT "_ProjectInfoToTecnology_B_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "challenges" TEXT[],
ADD COLUMN     "client" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'Frontend Developer',
ADD COLUMN     "year" INTEGER NOT NULL DEFAULT 2025;

-- DropTable
DROP TABLE "ProjectInfo";

-- DropTable
DROP TABLE "_ProjectInfoToTecnology";

-- CreateTable
CREATE TABLE "_ProjectToTecnology" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ProjectToTecnology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToTecnology_B_index" ON "_ProjectToTecnology"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTecnology" ADD CONSTRAINT "_ProjectToTecnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTecnology" ADD CONSTRAINT "_ProjectToTecnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Tecnology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
