import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

export let getReportDuration = new Trend('get_report_duration');
export let getReportFailRate = new Rate('get_report_fail_rate');
export let getReportSuccessRate = new Rate('get_report_success_rate');
export let getReportReqs = new Rate('get_report_reqs');

export default function () {
  let res = http.get('https://ticket-io-server-pi2.vercel.app/report')
  
  getReportDuration.add(res.timings.duration);
  getReportReqs.add(1);
  getReportFailRate.add(res.status == 0 || res.status > 399);
  getReportSuccessRate.add(res.status < 399);

  let durationMsg = 'Max Duration ${1000/1000}s'
  if(!check(res, {
    'max duration': (r) => r.timings.duration < 1000,
  })){
    fail(durationMsg);
  }
  
  sleep(1);
}
