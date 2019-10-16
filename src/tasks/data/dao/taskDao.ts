import { EntityRepository, Repository } from "typeorm";
import { Task } from "../entity/task.entitiy";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

}
