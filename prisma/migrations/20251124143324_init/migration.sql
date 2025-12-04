-- CreateTable
CREATE TABLE "Tecnology" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Tecnology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectInfo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "client" TEXT NOT NULL,
    "year" INTEGER NOT NULL DEFAULT 2025,
    "role" TEXT NOT NULL DEFAULT 'Frontend Developer',
    "challenges" TEXT[],

    CONSTRAINT "ProjectInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "projectUrl" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "infoId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectInfoToTecnology" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ProjectInfoToTecnology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tecnology_name_key" ON "Tecnology"("name");

-- CreateIndex
CREATE UNIQUE INDEX "project_slug_idx" ON "Project"("slug");

-- CreateIndex
CREATE INDEX "_ProjectInfoToTecnology_B_index" ON "_ProjectInfoToTecnology"("B");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "ProjectInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectInfoToTecnology" ADD CONSTRAINT "_ProjectInfoToTecnology_A_fkey" FOREIGN KEY ("A") REFERENCES "ProjectInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectInfoToTecnology" ADD CONSTRAINT "_ProjectInfoToTecnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Tecnology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
