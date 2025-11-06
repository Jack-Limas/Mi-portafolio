import React from 'react';

type Project = {
  image: string;
  title: string;
  description: string;
  demo: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col justify-between">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-4 shadow-sm object-cover h-36 w-full"
      />
      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mx-auto mt-2 text-center">
        DEMO
      </a>
    </div>
  );
}
