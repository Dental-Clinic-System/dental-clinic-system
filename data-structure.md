# Dental clinic backend data structure

There will be 2 collections in mongoDB, which are clinicsDB and masterDB

## ClinicsDB

A collection which includes all confirmed hospital accounts as a collection for each one.

## MasterDB

A collection which includes all data that "super admin' needs. For example: requested hospitals, dashboardata, etc...

## Actions

When the "super admin" accepts requested hospital, the accepted hospital will be deleted from "requested hospital" collection and will be added in ClinicDB as a collection.

Once the hospital is added in ClinicDB, automated trigger function is called and will send mail(includes auto generated password and username) to that hospital.
