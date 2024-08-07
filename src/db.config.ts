import { createClient } from '@supabase/supabase-js';
import { DataAPIClient } from "@datastax/astra-db-ts";
import 'dotenv/config'

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
export const astra = new DataAPIClient(process.env.ASTRADB_KEY).db(process.env.ASTRADB_URL);

// (async () => {
  // const colls = await db.listCollections();
  // console.log('Connected to AstraDB:', colls);
  // await db.createCollection('reports_test');
  // console.log('Collection created: reports_test');

  // await db.collection('reports_test').insertOne({
  //   user_count: 3,
  //   group_count: 2,
  //   issue_count: 5,
  //   solution_count: 3,
  //   solved_issues: 2,
  //   solving_issues_avg: 3,
  //   late_issues: 1,
  // });
  // console.log('Report inserted'); // id = 3177121f-31e2-45b1-b712-1f31e235b169

  // const report = await db.collection('reports_test').findOne({ _id: '3177121f-31e2-45b1-b712-1f31e235b169' });
  // console.log('Report:', report);

  // const reports = await db.collection('reports_test').find({}, {limit:10}).toArray();
  // console.log('Reports:', reports);

  // report.user_count,
  // report.group_count,
  // report.issue_count,
  // report.solution_count,
  // report.solved_issues,
  // report.solving_issues_avg,
  // report.late_issues
  // cassandra cql create:
  // CREATE TABLE reports (
  //   id UUID PRIMARY KEY,
  //   user_count INT,
  //   group_count INT,
  //   issue_count INT,
  //   solution_count INT,
  //   solved_issues INT,
  //   solving_issues_avg INT,
  //   late_issues INT
  // );
// })();