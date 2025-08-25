-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "tagId" INTEGER;

-- AlterTable
ALTER TABLE "public"."Recipe" ADD COLUMN     "tagId" INTEGER;

-- CreateTable
CREATE TABLE "public"."ProductTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RecipeTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "RecipeTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."ProductTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Recipe" ADD CONSTRAINT "Recipe_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."RecipeTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
