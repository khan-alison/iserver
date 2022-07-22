import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('classes', { schema: 'istech_management' })
export class Classes extends BaseEntity {
  @PrimaryColumn({ name: 'class_code' })
  classCode: string;

  @Column({ name: 'class_major' })
  classMajor: string;

  @Column({ name: 'total_students' })
  totalStudent: string;

  @Column({ name: 'graduated_status' })
  graduatedStatus: string;
}
