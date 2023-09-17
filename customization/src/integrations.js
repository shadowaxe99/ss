```javascript
import axios from 'axios';
import { API_URL } from '../config';

export const integrateNewSkill = async (skill) => {
  try {
    const response = await axios.post(`${API_URL}/skills`, skill);
    return response.data;
  } catch (error) {
    console.error('Failed to integrate new skill', error);
    throw error;
  }
};

export const integrateNewCapability = async (capability) => {
  try {
    const response = await axios.post(`${API_URL}/capabilities`, capability);
    return response.data;
  } catch (error) {
    console.error('Failed to integrate new capability', error);
    throw error;
  }
};
```