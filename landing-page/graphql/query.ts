import { gql } from '@apollo/client';

export const getProvinces = gql`
  query GetProvinces {
    getProvinces {
      code
      name
    }
  }
`;

export const getDistricts = gql`
  query GetDistricts($parent: String) {
    getDistricts(parent: $parent) {
      code
      name
      parent
    }
  }
`;

export const getCommittees = gql`
  query GetCommittees($parent: String) {
    getCommittees(parent: $parent) {
      code
      name
      grand_parent
      parent
    }
  }
`;
