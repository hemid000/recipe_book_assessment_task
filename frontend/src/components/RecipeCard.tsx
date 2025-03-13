import React from "react";

type RecipeProps = {
  title: string;
};

const RecipeCard: React.FC<RecipeProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default RecipeCard;
