-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskId_fkey";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
