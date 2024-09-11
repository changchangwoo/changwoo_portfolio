import React from 'react';
import ProjectBadge from '../common/ProjectBadge';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    badges: string[];
    images: string;
    description: string;
}

const ProjectCard = ({ title, badges, description, images }: ProjectCardProps) => {
    return (
        <div className='w-full h-full bg-white flex flex-col gap-2 rounded-lg pb-5 cursor-pointer'>
            <div className='relative w-full h-[60%]'> {/* 부모 div 추가 */}
                <Image
                    src={images}
                    alt={title}
                    className='object-cover rounded-tl-lg rounded-tr-lg'
                    layout="fill" // 부모 div에 맞게 채우기
                    quality={100} // 품질 설정
                />
            </div>
            <div className='px-2'>
                <div className='flex gap-[5px] my-2'>
                    {
                        badges.map((item, index) => (
                            <ProjectBadge key={index} tagName={item} />
                        ))
                    }
                </div>
                <p className='font-extrabold text-primary text-lg mb-3'>
                    {title}
                </p>
                <p className='font-medium text-primary text-sm leading-4'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;
