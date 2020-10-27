import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '100s',
};

export default function () {
  const randomProdId = Math.floor(Math.random() * 10000000) + 1;
  const res = http.get(`http://localhost:3001/questions/${randomProdId}`);

  check(res, {
    'status was 200': (r) => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  sleep(0.1);
}
