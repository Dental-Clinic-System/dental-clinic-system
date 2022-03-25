import React from 'react';
import { Box, Grid, TextField, Typography, InputLabel, MenuItem } from '@mui/material';

type grid = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
type QuestionType = {
  id?: string;
  question: string;
  value: string;
  onChange: any;
  type: 'input' | 'selector' | 'number';
  grid: grid;
  selections?: Array<string>;
  error: boolean;
};
type QuestionSectionType = {
  label: string;
  width?: string;
  questions: Array<QuestionType>;
};

export const QuestionSection = ({ label, width, questions }: QuestionSectionType) => {
  return (
    <Box width={width || '100%'}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        {label}
      </Typography>

      <Grid container justifyContent="space-between">
        {questions.map((cur, index) => (
          <Question key={`label-question-${index}`} {...cur} />
        ))}
      </Grid>
    </Box>
  );
};

const Question = ({ id, value, question, grid, onChange, selections, error, type }: QuestionType) => {
  // const handleChange = (e: any) => {
  //   onChange && onChange(e.target.value);
  // };

  if (type === 'selector')
    return (
      <Grid item {...grid}>
        <InputLabel style={{ marginBottom: '10px', marginTop: '10px' }}>{question}</InputLabel>
        <TextField fullWidth select value={value} onChange={onChange} size="small" error={error}>
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
        <TextField value={value} type="number" error={error} onChange={onChange} fullWidth size="small" />
      </Grid>
    );
  return (
    <Grid item {...grid}>
      <InputLabel style={{ marginBottom: '10px', marginTop: '10px' }}>{question}</InputLabel>
      <TextField id={id} label={id} name={id} value={value} error={error} onChange={onChange} fullWidth size="small" />
    </Grid>
  );
};
