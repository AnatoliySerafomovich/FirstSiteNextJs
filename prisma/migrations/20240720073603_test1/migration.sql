-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('Mobile', 'Basic', 'Standard', 'Premium');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Admin');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('K_Drama', 'Sci_fi_Horror', 'Action_Movie', 'US_TV_Drama', 'Anime', 'New_Release', 'Trending_Now', 'Continue_Watching', 'Popular_on_Netflix');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "password" TEXT NOT NULL,
    "favoriteFilmId" INTEGER[],
    "dateCreate" TIMESTAMP(3) NOT NULL,
    "confirm" BOOLEAN NOT NULL,
    "plan" "Plan" NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'User',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "miniPreview" TEXT[],
    "largePreview" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "soapOpera" BOOLEAN NOT NULL,
    "watched" INTEGER NOT NULL DEFAULT 0,
    "video" TEXT[],

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
