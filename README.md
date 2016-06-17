
# Octopus deploy api

### Example :
```javascript
var octopusapi = require('octopusapi'); 

var client = new octopusapi('http{s}://youroctopusserver.domain:port}','yourApiKey')

client.Projects((err,body)=>{
  console.log(err);
  console.log(body);
})
```

## Api definitions:
## Functions

<dl>
<dt><a href="#octopusapi">octopusapi(actopusurl, apikey)</a></dt>
<dd><p>octopus - description</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>Callback for request.</p>
</dd>
</dl>

<a name="octopusapi"></a>

## octopusapi(actopusurl, apikey)
octopus - description

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| actopusurl | <code>string</code> | octopus-deploy-url |
| apikey | <code>string</code> | apikey |


* [octopusapi(actopusurl, apikey)](#octopusapi)
    * [.Self(callback)](#octopusapi+Self)
    * [.Accounts(id, params, callback)](#octopusapi+Accounts)
    * [.ActionTemplates(id, params, callback)](#octopusapi+ActionTemplates)
    * [.Alerts(id, params, callback)](#octopusapi+Alerts)
    * [.Artifacts(id, params, callback)](#octopusapi+Artifacts)
    * [.Channels(id, callback)](#octopusapi+Channels)
    * [.Certificates(id, params, callback)](#octopusapi+Certificates)
    * [.CurrentUser(callback)](#octopusapi+CurrentUser)
    * [.CurrentLicense(callback)](#octopusapi+CurrentLicense)
    * [.Dashboard(callback)](#octopusapi+Dashboard)
    * [.DashboardConfiguration(callback)](#octopusapi+DashboardConfiguration)
    * [.DashboardDynamic(params, callback)](#octopusapi+DashboardDynamic)
    * [.DeploymentProcesses(id, callback)](#octopusapi+DeploymentProcesses)
    * [.Deployments(id, params, callback)](#octopusapi+Deployments)
    * [.DiscoverMachine(params, callback)](#octopusapi+DiscoverMachine)
    * [.Environments(id, params, callback)](#octopusapi+Environments)
    * [.EnvironmentSortOrder(callback)](#octopusapi+EnvironmentSortOrder)
    * [.Events(id, params, callback)](#octopusapi+Events)
    * [.ExternalSecurityGroups(id, params, callback)](#octopusapi+ExternalSecurityGroups)
    * [.Feeds(id, params, callback)](#octopusapi+Feeds)
    * [.Interruptions(id, params, callback)](#octopusapi+Interruptions)
    * [.Invitations(callback)](#octopusapi+Invitations)
    * [.LibraryVariables(id, params, callback)](#octopusapi+LibraryVariables)
    * [.Lifecycles(id, params, callback)](#octopusapi+Lifecycles)
    * [.MachineRoles(callback)](#octopusapi+MachineRoles)
    * [.Machines(id, params, callback)](#octopusapi+Machines)
    * [.MaintenanceConfiguration(callback)](#octopusapi+MaintenanceConfiguration)
    * [.OctopusServerNodes(id, callback)](#octopusapi+OctopusServerNodes)
    * [.Packages(id, params, callback)](#octopusapi+Packages)
    * [.PackagesBulk(params, callback)](#octopusapi+PackagesBulk)
    * [.PackageUpload(params, callback)](#octopusapi+PackageUpload)
    * [.ProjectGroups(id, params, callback)](#octopusapi+ProjectGroups)
    * [.Projects(id, params, callback)](#octopusapi+Projects)
    * [.ProjectPulse(params, callback)](#octopusapi+ProjectPulse)
    * [.Register(callback)](#octopusapi+Register)
    * [.Releases(id, params, callback)](#octopusapi+Releases)
    * [.ServerStatus(callback)](#octopusapi+ServerStatus)
    * [.SignIn(params, callback)](#octopusapi+SignIn)
    * [.SignOut(callback)](#octopusapi+SignOut)
    * [.RetentionPolicies(id, params, callback)](#octopusapi+RetentionPolicies)
    * [.SmtpConfiguration(callback)](#octopusapi+SmtpConfiguration)
    * [.Tasks(id, params, callback)](#octopusapi+Tasks)
    * [.Teams(id, params, callback)](#octopusapi+Teams)
    * [.UserRoles(id, params, callback)](#octopusapi+UserRoles)
    * [.Users(id, params, callback)](#octopusapi+Users)
    * [.PermissionDescriptions(callback)](#octopusapi+PermissionDescriptions)
    * [.Variables(id, callback)](#octopusapi+Variables)
    * [.VariableNames(params, callback)](#octopusapi+VariableNames)
    * [.VariablesNonPrintableChars(callback)](#octopusapi+VariablesNonPrintableChars)
    * [.VersionRuleTest(params, callback)](#octopusapi+VersionRuleTest)
    * [.ReportingDeploymentsCountedByWeek(params, callback)](#octopusapi+ReportingDeploymentsCountedByWeek)
    * [.RepositoryConfiguration(callback)](#octopusapi+RepositoryConfiguration)
    * [.Web(callback)](#octopusapi+Web)

<a name="octopusapi+Self"></a>

### octopusapi.Self(callback)
octopusapi.prototype.Self - Self

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Accounts"></a>

### octopusapi.Accounts(id, params, callback)
octopusapi.prototype.Accounts - Accounts

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+ActionTemplates"></a>

### octopusapi.ActionTemplates(id, params, callback)
octopusapi.prototype.ActionTemplates - ActionTemplates

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Alerts"></a>

### octopusapi.Alerts(id, params, callback)
octopusapi.prototype.Alerts - Alerts

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Artifacts"></a>

### octopusapi.Artifacts(id, params, callback)
octopusapi.prototype.Artifacts - Artifacts

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,regarding} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Channels"></a>

### octopusapi.Channels(id, callback)
octopusapi.prototype.Channels - Channels

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Certificates"></a>

### octopusapi.Certificates(id, params, callback)
octopusapi.prototype.Certificates - Certificates

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+CurrentUser"></a>

### octopusapi.CurrentUser(callback)
octopusapi.prototype.CurrentUser - CurrentUser

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+CurrentLicense"></a>

### octopusapi.CurrentLicense(callback)
octopusapi.prototype.CurrentLicense - CurrentLicense

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Dashboard"></a>

### octopusapi.Dashboard(callback)
octopusapi.prototype.Dashboard - Dashboard

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+DashboardConfiguration"></a>

### octopusapi.DashboardConfiguration(callback)
octopusapi.prototype.DashboardConfiguration - DashboardConfiguration

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+DashboardDynamic"></a>

### octopusapi.DashboardDynamic(params, callback)
octopusapi.prototype.DashboardDynamic - DashboardDynamic

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {projects,environments,includePrevious} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+DeploymentProcesses"></a>

### octopusapi.DeploymentProcesses(id, callback)
octopusapi.prototype.DeploymentProcesses - DeploymentProcesses

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Deployments"></a>

### octopusapi.Deployments(id, params, callback)
octopusapi.prototype.Deployments - Deployments

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,take,projects,environments,taskState} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+DiscoverMachine"></a>

### octopusapi.DiscoverMachine(params, callback)
octopusapi.prototype.DiscoverMachine - DiscoverMachine

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {host,port,type} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Environments"></a>

### octopusapi.Environments(id, params, callback)
octopusapi.prototype.Environments - Environments

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+EnvironmentSortOrder"></a>

### octopusapi.EnvironmentSortOrder(callback)
octopusapi.prototype.EnvironmentSortOrder - EnvironmentSortOrder

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Events"></a>

### octopusapi.Events(id, params, callback)
octopusapi.prototype.Events - Events

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,regarding,modifier,user,from,to} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+ExternalSecurityGroups"></a>

### octopusapi.ExternalSecurityGroups(id, params, callback)
octopusapi.prototype.ExternalSecurityGroups - ExternalSecurityGroups

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {name} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Feeds"></a>

### octopusapi.Feeds(id, params, callback)
octopusapi.prototype.Feeds - Feeds

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Interruptions"></a>

### octopusapi.Interruptions(id, params, callback)
octopusapi.prototype.Interruptions - Interruptions

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,regarding,pendingOnly} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Invitations"></a>

### octopusapi.Invitations(callback)
octopusapi.prototype.Invitations - Invitations

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+LibraryVariables"></a>

### octopusapi.LibraryVariables(id, params, callback)
octopusapi.prototype.LibraryVariables - LibraryVariables

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,contentType} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Lifecycles"></a>

### octopusapi.Lifecycles(id, params, callback)
octopusapi.prototype.Lifecycles - Lifecycles

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+MachineRoles"></a>

### octopusapi.MachineRoles(callback)
octopusapi.prototype.MachineRoles - MachineRoles

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Machines"></a>

### octopusapi.Machines(id, params, callback)
octopusapi.prototype.Machines - Machines

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,thumbprint} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+MaintenanceConfiguration"></a>

### octopusapi.MaintenanceConfiguration(callback)
octopusapi.prototype.MaintenanceConfiguration - MaintenanceConfiguration

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+OctopusServerNodes"></a>

### octopusapi.OctopusServerNodes(id, callback)
octopusapi.prototype.OctopusServerNodes - OctopusServerNodes

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Packages"></a>

### octopusapi.Packages(id, params, callback)
octopusapi.prototype.Packages - Packages

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {nuGetPackageId,filter,latest,skip,take,includeNotes} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+PackagesBulk"></a>

### octopusapi.PackagesBulk(params, callback)
octopusapi.prototype.PackagesBulk - PackagesBulk

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {ids} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+PackageUpload"></a>

### octopusapi.PackageUpload(params, callback)
octopusapi.prototype.PackageUpload - PackageUpload

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {replace} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+ProjectGroups"></a>

### octopusapi.ProjectGroups(id, params, callback)
octopusapi.prototype.ProjectGroups - ProjectGroups

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Projects"></a>

### octopusapi.Projects(id, params, callback)
octopusapi.prototype.Projects - Projects

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,clone} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+ProjectPulse"></a>

### octopusapi.ProjectPulse(params, callback)
octopusapi.prototype.ProjectPulse - ProjectPulse

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {projectIds} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Register"></a>

### octopusapi.Register(callback)
octopusapi.prototype.Register - Register

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Releases"></a>

### octopusapi.Releases(id, params, callback)
octopusapi.prototype.Releases - Releases

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,ignoreChannelRules} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+ServerStatus"></a>

### octopusapi.ServerStatus(callback)
octopusapi.prototype.ServerStatus - ServerStatus

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+SignIn"></a>

### octopusapi.SignIn(params, callback)
octopusapi.prototype.SignIn - SignIn

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {returnUrl} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+SignOut"></a>

### octopusapi.SignOut(callback)
octopusapi.prototype.SignOut - SignOut

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+RetentionPolicies"></a>

### octopusapi.RetentionPolicies(id, params, callback)
octopusapi.prototype.RetentionPolicies - RetentionPolicies

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+SmtpConfiguration"></a>

### octopusapi.SmtpConfiguration(callback)
octopusapi.prototype.SmtpConfiguration - SmtpConfiguration

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Tasks"></a>

### octopusapi.Tasks(id, params, callback)
octopusapi.prototype.Tasks - Tasks

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,active,environment,project,name,node,running} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Teams"></a>

### octopusapi.Teams(id, params, callback)
octopusapi.prototype.Teams - Teams

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+UserRoles"></a>

### octopusapi.UserRoles(id, params, callback)
octopusapi.prototype.UserRoles - UserRoles

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Users"></a>

### octopusapi.Users(id, params, callback)
octopusapi.prototype.Users - Users

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+PermissionDescriptions"></a>

### octopusapi.PermissionDescriptions(callback)
octopusapi.prototype.PermissionDescriptions - PermissionDescriptions

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Variables"></a>

### octopusapi.Variables(id, callback)
octopusapi.prototype.Variables - Variables

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+VariableNames"></a>

### octopusapi.VariableNames(params, callback)
octopusapi.prototype.VariableNames - VariableNames

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {project} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+VariablesNonPrintableChars"></a>

### octopusapi.VariablesNonPrintableChars(callback)
octopusapi.prototype.VariablesNonPrintableChars - VariablesNonPrintableChars

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+VersionRuleTest"></a>

### octopusapi.VersionRuleTest(params, callback)
octopusapi.prototype.VersionRuleTest - VersionRuleTest

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {version,versionRange,preReleaseTag} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+ReportingDeploymentsCountedByWeek"></a>

### octopusapi.ReportingDeploymentsCountedByWeek(params, callback)
octopusapi.prototype.ReportingDeploymentsCountedByWeek - ReportingDeploymentsCountedByWeek

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {projectIds} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+RepositoryConfiguration"></a>

### octopusapi.RepositoryConfiguration(callback)
octopusapi.prototype.RepositoryConfiguration - RepositoryConfiguration

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopusapi+Web"></a>

### octopusapi.Web(callback)
octopusapi.prototype.Web - Web

**Kind**: instance method of <code>[octopusapi](#octopusapi)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="callback"></a>

## callback : <code>function</code>
Callback for request.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>object</code> | An object. |
| body | <code>object</code> | An object. |
