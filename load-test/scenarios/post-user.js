import http from 'k6/http';

import { check, fail } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

export let postUserDuration = new Trend('post_user_duration');
export let postUserFailRate = new Rate('post_user_fail_rate');
export let postUserSuccessRate = new Rate('post_user_success_rate');
export let postUserReqs = new Rate('post_user_reqs');

export default function (doc) {
  // obtem um usuario aleatorio de users.json 
  let users = JSON.parse(doc);
  let user = users[Math.floor(Math.random() * users.length)];
  let res = http.post('https://ticket-io-server-pi2.vercel.app/user', JSON.stringify(user), {
      headers: {
          'Content-Type': 'application/json',
      },
  });

  postUserDuration.add(res.timings.duration);
  postUserReqs.add(1);
  postUserFailRate.add(res.status == 0 || res.status > 399);
  postUserSuccessRate.add(res.status < 399);

  let durationMsg = 'Max Duration ${1000/1000}s'
  if(!check(res, {
      'max duration': (r) => r.timings.duration < 1000,
  })){
      fail(durationMsg);
  }
}