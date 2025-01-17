interface SkillCellProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCell: React.FC<SkillCellProps> = ({ title, skills, className }) => {
  return (
    <div
      className={`p-4 bg-white overflow-hidden shadow-md md:hover:shadow-lg transition-shadow duration-300 rounded-lg transform ${className}`}
    >
      <h3 className="text-xl font-semibold text-primary-600 mb-2 md:hover:text-primary-500 transition-colors duration-300">
        {title}
      </h3>
      <ul className="px-4 text-left text-base list-disc list-inside text-gray-600">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="md:hover:text-primary-600 md:hover:translate-x-1 transition-transform duration-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCell;
