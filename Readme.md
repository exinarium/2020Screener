# Welcome to 2020 Screener

2020 Screener is an application that started its roots in the midst of the 2020 Covid-19 pandemic. The South African government enforced a lockdown on its citizens to protect them from the virus that was doing major damage globally. With this lockdown a lot of businesses had to close their doors and the economy was extremely down.

The idea for the 2020 Screener came when the lockdown rules were starting to lift and businesses could continue. Part of the arrangement was that they needed to screen every client for Covid-19. This resulted in tremendous amounts of paperwork and administration. 

The app started out as an application to screen clients and save the data in the cloud. As time passed a need was seen in businesses to grow their contact database. In December 2019 the South African government approved the POPI act, which protects personal information. It is closely related to the GDPR that is enforced within European nations. When the pandemic hit, it became quite obvious that businesses took clients coming through the door as a given, and they did not put in the work to grow their databases and capture these clients' information.

The businesses that continued marketing through the pandemic started to recover, but the ones without a client database struggled to keep the doors open. We decided to start integrations with platforms like Google Sheets, Active Campaign and Hubspot so contact information could be pushed into these lists. From here automations can be set up and allow for marketing even when the doors are shut. And with this all, the 2020 Screener was born.

## Basic information

This application runs on the MEAN (MongoDB, ExpressJS, Angular and NodeJS) stack. It is built around a microservice architecture with a customised message bus for communication. Full audit trails are written with every change with the use of a audit service. This implements parts of the CQRS and Eventsourcing architecture that we saw fit.

## Code Structure

The code structure is fairly simple. It is split into client side and services.

The client side is the Angular part of the app. This is a modular UI, built with splitting functionality as much as possible.

The service side is setup in a modular fashion:

* Candidate.Module -> Contains the contact profile and interaction services
* Core.Module -> Contains the message bus code and the metrics logger package
* General.Module -> Contains everyday services such as Authentication, Logging, Audit Trail, Email, Express Gateway and the templates that can be used to generate services
* Integrations.Module -> Contains all our integration services such as Active Campaign and Hubspot
* Organization.Module -> Contains the organization service that manages the organization
* Payments.Module -> Contains the Payfast service which integrates with the Payfast Payment Gateway
* Tools.Module -> Contains files for docker deployments and initial infrastructure setup
* User.Module -> Contains the user API for managing user related data

## Important Notes

In the app we refer to the app as the covid-screener. This is what the app has been called before we changed the name to 2020Screener.

## Basic Guidelines

* Keep your code clean at all times.
* Document above every method and inside methods where logic is unclear. We do not write additional technical documentation so in code comments are critical. This saves time and is easier to manage while coding.
* Follow good international coding standards.
* Always build and test code in a feature branch. Once completed, a pull request will be done to merge the code into pre-release. Anything that is in pre-release can be released at any time so please keep this branch clean. Once released the code will merge to master.
* For your feature branch build a docker container to deploy to the development host. Once tested and ready to merge, build the main image that will be released. Remove the feature container afterwards and place the main container on the dev host. Remember to update the routes inside Express Gateway.
* We work on continuous integration, once an item is completed, release it as fast as possible.
* Once code is merged to pre-release the items can be marked as Pre-Release. Once released, mark them as Done.
* Use the template shell script to create the base of your API for you.
* We don't do time tracking or make promises we can't keep. We finish items as soon as possible and release them when they are done, not when promises were made. This gives the developers more freedom and a less stressful work environment.

## Items and Issue Tracking

* Feature requests will be logged under Azure Devops as Epics in the Feature Request Area. Once accepted it will move to the active area and issues will be created that can be handled.
* Always handle critical issues first.
* We work on a Kanban structure, so grab the next available item when you complete your current item. There are no sprints or pre-allocated items so any item is up for grabs.
