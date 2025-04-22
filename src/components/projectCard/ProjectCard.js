import React, { useState } from "react";

const ProjectCard = ({ repo, theme }) => (
  <div className="transform transition-all duration-200 hover:scale-[1.02] w-full">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {repo.name}
          </h3>
          <div className="flex space-x-2">
            {repo.go && (
              <a href={repo.go} className="text-blue-500 hover:text-blue-600">
                <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900">
                  Demo
                </span>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {repo.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {repo.date} • {repo.team || "Solo"}
          </div>
          <div className="flex space-x-2">
            {repo.technologies?.map((tech, index) => (
              <img
                key={index}
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
