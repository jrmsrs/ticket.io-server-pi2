import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

export let getUserDuration = new Trend('get_user_duration');
export let getUserFailRate = new Rate('get_user_fail_rate');
export let getUserSuccessRate = new Rate('get_user_success_rate');
export let getUserReqs = new Rate('get_user_reqs');

export default function () {
  let res = http.get('https://ticket-io-server-pi2.vercel.app/user');
  
  getUserDuration.add(res.timings.duration);
  getUserReqs.add(1);
  getUserFailRate.add(res.status == 0 || res.status > 399);
  getUserSuccessRate.add(res.status < 399);

  let durationMsg = 'Max Duration ${1000/1000}s';
  if (!check(res, {
    'max duration': (r) => r.timings.duration < 1000,
  })) {
    fail(durationMsg);
  }
  
  sleep(1);
}
