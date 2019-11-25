import React from 'react';
import { ImageCircle } from 'components';
import {
  CardContainer,
  CardDescription,
  CardContent,
  CardTitleConteiner,
  CardTitle,
  CardImageContainer
} from './styled';

const JobCard = ({
  id,
  title,
  description,
  job_type,
  industry,
  categorie,
  qnty,
  is_active,
  createdAt,
  updatedAt,
  userId,
  user: { url }
}) => {
  function descriptionLength(description) {
    if (description.length > 100) {
      return `${description.slice(0, 100)}...`;
    }
    return description;
  }
  return (
    <CardContainer>
      <CardImageContainer>
        <ImageCircle src={url} size={60} />
      </CardImageContainer>
      <CardTitleConteiner>
        <CardTitle>{title}</CardTitle>
      </CardTitleConteiner>
      <CardContent>
        <CardDescription>{descriptionLength(description)}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};
export default JobCard;
