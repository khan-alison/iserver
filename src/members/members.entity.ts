import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('members', { schema: 'istech_management' })
export class Members extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'account', unique: true })
  account: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'dob' })
  dob: Date;

  @Column({ name: 'class' })
  class: string;

  @Column({ name: 'student_id', unique: true })
  studentId: number;

  @Column({ name: 'ms_teams_email', unique: true })
  msTeams: Date;

  @Column({ name: 'facebook_account' })
  facebookAccount: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'trello_account', unique: true })
  trelloAccount: string;

  @Column({ name: 'city_code' })
  cityCode: string;

  @Column({ name: 'department_code' })
  departmentCode: string;

  @Column({ name: 'generation' })
  generation: Date;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'created_by' })
  createBy: Date;

  @Column({ name: 'joined_since' })
  joinedSince: Date;
}
