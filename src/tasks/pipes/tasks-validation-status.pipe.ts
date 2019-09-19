import { PipeTransform, BadRequestException } from "@nestjs/common";
import { Any } from "typeorm";
import { TaskStatus } from "../tasks-status.enum";

export class TasksStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ];

    transform(
        value: any
    ) {
        if(!this.allowedStatuses.includes(value)) {
            throw new BadRequestException(`"${value}" is an invalid status`);
        }

        return value.toUpperCase();
    }
}