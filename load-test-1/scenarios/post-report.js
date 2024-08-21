import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

export let postReportDuration = new Trend('post_report_duration');
export let postReportFailRate = new Rate('post_report_fail_rate');
export let postReportSuccessRate = new Rate('post_report_success_rate');
export let postReportReqs = new Rate('post_report_reqs');

export default function () {
  let res = http.post('https://ticket-io-server-pi2.vercel.app/report')
  
  postReportDuration.add(res.timings.duration);
  postReportReqs.add(1);
  postReportFailRate.add(res.status == 0 || res.status > 399);
  postReportSuccessRate.add(res.status < 399);

  let durationMsg = 'Max Duration ${1000/1000}s'
  if(!check(res, {
    'max duration': (r) => r.timings.duration < 1000,
  })){
    fail(durationMsg);
  }
  
  sleep(1);
}
