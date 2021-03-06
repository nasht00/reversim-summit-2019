import React from 'react';
import {WithContext as ReactTags} from 'react-tag-input';
import {Button} from 'reactstrap';
import cn from 'classnames';
import {
  tags as tagsClass,
  tagInput,
  tagInputField,
  selected,
  tag,
  remove,
  suggestions as suggestionsClass,
  activeSuggestion,
} from './ReactTags.css';

export const MAX_TAGS = 3;

const classNames = {
  tags: tagsClass,
  tagInput,
  tagInputField: cn(tagInputField, 'form-control'),
  selected,
  tag,
  remove,
  suggestions: suggestionsClass,
  activeSuggestion,
};

const Tags = ({
  tags,
  suggestions,
  handleDelete,
  handleAddition,
  readOnly,
  predefinedSuggestions,
  className,
}) => (
  <div className={className}>
    <label>Tags</label>
    <small className="d-block mb-2">Maximum {MAX_TAGS} tags. Help us and your audience classify your session.</small>
    <ReactTags
      tags={tags}
      suggestions={suggestions}
      readOnly={readOnly}
      minQueryLength={1}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      autofocus={false}
      classNames={cn(classNames, "styled-button btn btn-secondary")}
      styles={{background:'linear-gradient(to right,rgba(118,12,146, 0.2) 0%, rgba(0,92,177,0.2) 100%)','border':'none'}}
    />
    {!readOnly && (
      <div className="mt-2">
        Suggestions:{'\u00a0\u00a0'}{' '}
        {predefinedSuggestions.map(suggestion => (
          <Button
            onClick={() => handleAddition(suggestion)}
            size="sm"
            color="link"
            className="btn btn-secondary mr-3 styled-button mb-2"
            style={{fontSize: 12, height: 30}}
            key={suggestion}>
            {suggestion}
          </Button>
        ))}
      </div>
    )}
  </div>
);

export default Tags;
