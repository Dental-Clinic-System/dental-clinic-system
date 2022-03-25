import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, InputLabel, MenuItem } from '@mui/material';

type grid = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
type QuestionType = {
  id: string;
  question: string;
  type: 'input' | 'selector' | 'number';
  grid: grid;
  selections?: Array<string>;
  error?: boolean ;
};
type QuestionSectionType = {
  label: string;
  width?: string;
  onChange?: (id: string, question: string, change: string) => void;
  questions: Array<QuestionType>;
};
type QuestionInputType = {
  onChange?: (id: string, question: string, change: string) => void;
};

export const QuestionSection = ({ label, width, questions, onChange }: QuestionSectionType) => {
 
  return (
    <Box width={width || '100%'}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        {label}
      </Typography>

      <Grid container justifyContent="space-between">
        {questions.map((cur, index) => (
          <Question onChange={onChange} key={`label-question-${index}`} {...cur} />
        ))}
      </Grid>
    </Box>
  );
};

const Question = ({ id, question, grid, onChange, selections, error, type }: QuestionType & QuestionInputType) => {
 
  
 
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    onChange && onChange(id, question, e.target.value);
    setValue(e.target.value);
  };

  if (type === 'selector')
    return (
      <Grid item {...grid}>
        <InputLabel style={{ marginBottom: '10px', marginTop: '10px' }}>{question}</InputLabel>
        <TextField fullWidth select value={value} onChange={handleChange} size="small" error={error}>
          {selections?.map((option, index) => (
            <MenuItem key={`${question}-option-${index}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    );

  if (type === 'number')
    return (
      <Grid item {...grid}>
        <InputLabel style={{ marginBottom: '10px', marginTop: '10px' }}>{question}</InputLabel>
        <TextField type="number" error={error} onChange={handleChange} fullWidth size="small" />
      </Grid>
    );
  return (
    <Grid item {...grid}>
      <InputLabel style={{ marginBottom: '10px', marginTop: '10px' }}>{question}</InputLabel>
      <TextField error={error} onChange={handleChange} fullWidth size="small" />
    </Grid>
  );
};
