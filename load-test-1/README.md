## 1ª Medição dos Testes de Carga

Serviço utilizado: k6 (https://k6.io/)

Gerenciamento de Usuários
* Tipo de operações: leitura / inserção
* Arquivos envolvidos: [users.controller.ts](src/users/users.controller.ts), [users.service.ts](src/users/users.service.ts)
* Arquivos com o código fonte de medição do SLA: [get-user.js](load-test-1/scenarios/get-user.js), [post-user.js](load-test-1/scenarios/post-user.js)
* Data da medição: 07/08/2024
* Descrição das configurações (máquinas/containers utilizadas para o sistema funcionar, ...):
  - Cliente React: Nuvem Vercel
  - Servidor Nestjs (Nodejs Express): Nuvem Vercel
  - Conexao com Banco de Dados PostgreSQL: Nuvem Supabase
* Testes de carga (SLA): latência, vazão e concorrência (limite de requisições simultâneas)
  - Requisições com latência média de 680ms (mínima de 294ms e pico de 2241ms) para leitura e 328ms (mínima de 280ms e pico de 1943ms) para inserção.
  - Vazão: 54.012687 requisições por segundo; 13.627488 iterações por segundo; 463 MB recebidos; 1.8 MB enviados
  - Concorrência: Suportou bem gradualmente a carga até 200 usuários simultâneos (VUs). Alguns picos de latência indicam que o desempenho pode ser afetado em situações de carga extrema.
* Potenciais gargalos do sistema: 
  - A latência média de 680ms para leitura de usuários pode ser um gargalo para o sistema, principalmente em situações de carga extrema. A inserção de usuários, por outro lado, apresentou uma latência média de 328ms, o que é um valor aceitável para a maioria dos casos.
  - Apenas 29.41% das requisições de inserção de usuários foram bem-sucedidas, acreditamos que seja apenas um problema com a abordagem de inserção que causaram colisões de e-mail e CPF que são campos únicos.

Gerenciamento de Relatórios
* Tipo de operações: leitura / inserção
* Arquivos envolvidos: [reports.controller.ts](src/reports/reports.controller.ts), [reports.service.ts](src/reports/reports.service.ts)
* Arquivos com o código fonte de medição do SLA: [get-report.js](load-test-1/scenarios/get-report.js), [post-report.js](load-test-1/scenarios/post-report.js)
* Data da medição: 07/08/2024
* Descrição das configurações (máquinas/containers utilizadas para o sistema funcionar, ...):
  - (mesmo cliente e servidor)
  - Conexao com Banco de Dados Cassandra: Nuvem Datastax (AstraDB)
* Testes de carga (SLA): latência, vazão e concorrência (limite de requisições simultâneas)
  - Requisições com latência média de 406ms (mínima de 181ms e pico de 1926ms) para leitura e 359ms (mínima de 302ms e pico de 1907ms) para inserção.
  - Vazão: (mesmo teste que o anterior)
  - Concorrência: (mesmo teste)
* Potenciais gargalos do sistema
  - Similar ao teste com Usuário no PostgreSQL, aparentemente proporcional ao tamanho do dado.

### Saída (07/08/2024 19:44:41)

```
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: ./load-test/index.js
        output: -

     scenarios: (100.00%) 1 scenario, 20 max VUs, 50s max duration (incl. graceful stop):
              * default: 20 looping VUs for 20s (gracefulStop: 30s)


     █ Endpoint User - Controller User  ticket-io-server-pi2.vercel.app

       ✗ max duration
        ↳  99% — ✓ 6562 / ✗ 41

     █ Endpoint Report - Controller Report  ticket-io-server-pi2.vercel.app

       ✗ max duration
        ↳  99% — ✓ 6526 / ✗ 14

     checks.........................: 99.58%  ✓ 13088     ✗ 55   
     data_received..................: 463 MB  1.9 MB/s
     data_sent......................: 1.8 MB  7.6 kB/s
     get_report_duration............: avg=406.244843 min=181.401984 med=405.89024  max=1926.278531 p(90)=553.046204 p(95)=581.51253 
     get_report_fail_rate...........: 0.00%   ✓ 0         ✗ 3275 
     get_report_reqs................: 100.00% ✓ 3275      ✗ 0    
     get_report_success_rate........: 100.00% ✓ 3275      ✗ 0    
     get_user_duration..............: avg=680.265869 min=294.128672 med=701.561054 max=2241.960002 p(90)=773.751281 p(95)=856.928968
   ✓ get_user_fail_rate.............: 0.00%   ✓ 0         ✗ 3316 
     get_user_reqs..................: 100.00% ✓ 3316      ✗ 0    
   ✓ get_user_success_rate..........: 100.00% ✓ 3316      ✗ 0    
     group_duration.................: avg=2.39s      min=1s         med=2.44s      max=3.81s       p(90)=2.87s      p(95)=2.93s     
     http_req_blocked...............: avg=898.79µs   min=220ns      med=551ns      max=1.05s       p(90)=702ns      p(95)=802ns     
     http_req_connecting............: avg=422.78µs   min=0s         med=0s         max=1.03s       p(90)=0s         p(95)=0s        
   ✓ http_req_duration..............: avg=444.32ms   min=181.4ms    med=356.85ms   max=2.24s       p(90)=717.32ms   p(95)=745.19ms  
       { expected_response:true }...: avg=469.3ms    min=181.4ms    med=386.77ms   max=2.24s       p(90)=725.32ms   p(95)=751.85ms  
     http_req_failed................: 17.65%  ✓ 2320      ✗ 10823
     http_req_receiving.............: avg=8.32ms     min=26.27µs    med=169.36µs   max=518.74ms    p(90)=22.84ms    p(95)=46.87ms   
     http_req_sending...............: avg=205.91µs   min=23.19µs    med=94.69µs    max=72.07ms     p(90)=186.76µs   p(95)=270.81µs  
     http_req_tls_handshaking.......: avg=428.67µs   min=0s         med=0s         max=120.39ms    p(90)=0s         p(95)=0s        
     http_req_waiting...............: avg=435.79ms   min=181.21ms   med=356.07ms   max=2.03s       p(90)=685.75ms   p(95)=709.01ms  
     http_reqs......................: 13143   54.012687/s
     iteration_duration.............: avg=4.75s      min=1s         med=4.81s      max=5.86s       p(90)=5.03s      p(95)=5.12s     
     iterations.....................: 3316    13.627488/s
     post_report_duration...........: avg=359.429134 min=302.886406 med=345.089788 max=1907.285548 p(90)=391.353371 p(95)=436.306785
     post_report_fail_rate..........: 0.00%   ✓ 0         ✗ 3265 
     post_report_reqs...............: 100.00% ✓ 3265      ✗ 0    
     post_report_success_rate.......: 100.00% ✓ 3265      ✗ 0    
     post_user_duration.............: avg=328.562297 min=280.652352 med=310.617845 max=1943.946142 p(90)=355.825323 p(95)=406.084766
     post_user_fail_rate............: 70.58%  ✓ 2320      ✗ 967  
     post_user_reqs.................: 100.00% ✓ 3287      ✗ 0    
     post_user_success_rate.........: 29.41%  ✓ 967       ✗ 2320 
     vus............................: 2       min=1       max=200
     vus_max........................: 200     min=200     max=200


running (4m03.3s), 000/200 VUs, 3316 complete and 0 interrupted iterations
default ✓ [======================================] 000/200 VUs  4m0s
```
