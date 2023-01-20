---
date: '2022-05-16'
title: 'Software Engineering Intern'
company: 'Copart'
location: 'Dallas, Texas (Remote)'
range: 'May 2022 - Dec 2022 (7 months)'
url: 'https://www.copart.com/locations/dallas-tx-12'
---

- Developed an internal notification system, which offers managing operations on notifications created by Copart users.
- Improved applications start-up performance by over 50% faster.
- Grew revenue for Copart business clients by 10% by adapting the latest notification features.
- To communicate the notifications to the users in the back-end API used Nchan which is a scalable, flexible pub/sub server for the modern web, built as a module for the Nginx web server.
- Implemented Dead Letter Queue (DLQ) pattern to retry the undelivered messages to the queue with a specified time interval in between the retries and when the number of retries is exhausted and stored these dead messages in the database for further recovery.
- Implemented an internal caching mechanism to avoid the extra REST calls for the user, yards, and group validations.
- Upgraded existing spring boot 2.3.4 application to spring boot 3.0.0 where changes have been made to spring security, spring cloud vault, spring cloud stream rabbit, open API, and Jakarta EE 9, JDK 17.
- Introduced GraalVM to an existing Copart notification application to improve the performance of languages that run on the JVM, reducing application startup times, integrating multi-language support into the Java ecosystem, as well as providing a set of programming tools to do so.
