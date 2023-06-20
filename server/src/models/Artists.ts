import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Artists {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    link: string;

    @Column('text')
    url: string;

    @Column('text')
    artist: string;

    @Column('text')
    description: string;

    @Column('text')
    productOne: string;
    
    @Column('text')
    descriptionOne: string;
    
    @Column('text')
    imageOne: string;

    @Column('text')
    linkOne: string;

    @Column('text')
    productTwo: string;
    
    @Column('text')
    descriptionTwo: string;
    
    @Column('text')
    imageTwo: string;

    @Column('text')
    linkTwo: string;

    @Column('text')
    productThree: string;
    
    @Column('text')
    descriptionThree: string;
    
    @Column('text')
    imageThree: string;

    @Column('text')
    linkThree: string;
}
