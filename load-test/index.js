import getUser from "./scenarios/get-user.js";
import postUser from "./scenarios/post-user.js";
import getReport from "./scenarios/get-report.js";
import postReport from "./scenarios/post-report.js";
import {group , sleep} from 'k6';

// Configurações para o teste
export let options = {
  stages: [
    { duration: '30s', target: 10 }, // até 10 usuários em 30 segundos
    { duration: '30s', target: 20 }, // aumenta até 20 usuários em 30 segundos
    { duration: '30s', target: 30 }, // aumenta até 30 usuários em 30 segundos
    { duration: '30s', target: 50 }, // aumenta até 50 usuários em 30 segundos
    { duration: '30s', target: 100 }, // aumenta até 100 usuários em 30 segundos
    { duration: '30s', target: 200 }, // aumenta até 100 usuários em 30 segundos
    { duration: '1m', target: 0 },  // diminui até 0 usuários em 1 minuto
  ],
  thresholds: {
    'http_req_duration': ['p(95)<1000'], // 95% das requisições devem ser menores que 1 segundo
    'get_user_fail_rate': ['rate<0.01'], // Taxa de falhas deve ser menor que 1%
    'get_user_success_rate': ['rate>0.99'], // Taxa de sucesso deve ser maior que 99%
  }
};

const users = open('./output/users.json');

export default () => {
    group('Endpoint User - Controller User  ticket-io-server-pi2.vercel.app', () => {
        getUser();
        postUser(users);
    });

    group('Endpoint Report - Controller Report  ticket-io-server-pi2.vercel.app', () => {
      getReport();
      postReport();
    });
}
