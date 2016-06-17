## Functions

<dl>
<dt><a href="#octopus">octopus(actopusurl, apikey)</a></dt>
<dd><p>octopus - description</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>Callback for request.</p>
</dd>
</dl>

<a name="octopus"></a>

## octopus(actopusurl, apikey)
octopus - description

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| actopusurl | <code>string</code> | octopus-deploy-url |
| apikey | <code>string</code> | apikey |


* [octopus(actopusurl, apikey)](#octopus)
    * [.Self(callback)](#octopus+Self)
    * [.Accounts(id, params, callback)](#octopus+Accounts)
    * [.ActionTemplates(id, params, callback)](#octopus+ActionTemplates)
    * [.Alerts(id, params, callback)](#octopus+Alerts)
    * [.Artifacts(id, params, callback)](#octopus+Artifacts)
    * [.Channels(id, callback)](#octopus+Channels)
    * [.Certificates(id, params, callback)](#octopus+Certificates)
    * [.CurrentUser(callback)](#octopus+CurrentUser)
    * [.CurrentLicense(callback)](#octopus+CurrentLicense)
    * [.Dashboard(callback)](#octopus+Dashboard)
    * [.DashboardConfiguration(callback)](#octopus+DashboardConfiguration)
    * [.DashboardDynamic(params, callback)](#octopus+DashboardDynamic)
    * [.DeploymentProcesses(id, callback)](#octopus+DeploymentProcesses)
    * [.Deployments(id, params, callback)](#octopus+Deployments)
    * [.DiscoverMachine(params, callback)](#octopus+DiscoverMachine)
    * [.Environments(id, params, callback)](#octopus+Environments)
    * [.EnvironmentSortOrder(callback)](#octopus+EnvironmentSortOrder)
    * [.Events(id, params, callback)](#octopus+Events)
    * [.ExternalSecurityGroups(id, params, callback)](#octopus+ExternalSecurityGroups)
    * [.Feeds(id, params, callback)](#octopus+Feeds)
    * [.Interruptions(id, params, callback)](#octopus+Interruptions)
    * [.Invitations(callback)](#octopus+Invitations)
    * [.LibraryVariables(id, params, callback)](#octopus+LibraryVariables)
    * [.Lifecycles(id, params, callback)](#octopus+Lifecycles)
    * [.MachineRoles(callback)](#octopus+MachineRoles)
    * [.Machines(id, params, callback)](#octopus+Machines)
    * [.MaintenanceConfiguration(callback)](#octopus+MaintenanceConfiguration)
    * [.OctopusServerNodes(id, callback)](#octopus+OctopusServerNodes)
    * [.Packages(id, params, callback)](#octopus+Packages)
    * [.PackagesBulk(params, callback)](#octopus+PackagesBulk)
    * [.PackageUpload(params, callback)](#octopus+PackageUpload)
    * [.ProjectGroups(id, params, callback)](#octopus+ProjectGroups)
    * [.Projects(id, params, callback)](#octopus+Projects)
    * [.ProjectPulse(params, callback)](#octopus+ProjectPulse)
    * [.Register(callback)](#octopus+Register)
    * [.Releases(id, params, callback)](#octopus+Releases)
    * [.ServerStatus(callback)](#octopus+ServerStatus)
    * [.SignIn(params, callback)](#octopus+SignIn)
    * [.SignOut(callback)](#octopus+SignOut)
    * [.RetentionPolicies(id, params, callback)](#octopus+RetentionPolicies)
    * [.SmtpConfiguration(callback)](#octopus+SmtpConfiguration)
    * [.Tasks(id, params, callback)](#octopus+Tasks)
    * [.Teams(id, params, callback)](#octopus+Teams)
    * [.UserRoles(id, params, callback)](#octopus+UserRoles)
    * [.Users(id, params, callback)](#octopus+Users)
    * [.PermissionDescriptions(callback)](#octopus+PermissionDescriptions)
    * [.Variables(id, callback)](#octopus+Variables)
    * [.VariableNames(params, callback)](#octopus+VariableNames)
    * [.VariablesNonPrintableChars(callback)](#octopus+VariablesNonPrintableChars)
    * [.VersionRuleTest(params, callback)](#octopus+VersionRuleTest)
    * [.ReportingDeploymentsCountedByWeek(params, callback)](#octopus+ReportingDeploymentsCountedByWeek)
    * [.RepositoryConfiguration(callback)](#octopus+RepositoryConfiguration)
    * [.Web(callback)](#octopus+Web)

<a name="octopus+Self"></a>

### octopus.Self(callback)
octopus.prototype.Self - Self

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Accounts"></a>

### octopus.Accounts(id, params, callback)
octopus.prototype.Accounts - Accounts

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+ActionTemplates"></a>

### octopus.ActionTemplates(id, params, callback)
octopus.prototype.ActionTemplates - ActionTemplates

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Alerts"></a>

### octopus.Alerts(id, params, callback)
octopus.prototype.Alerts - Alerts

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Artifacts"></a>

### octopus.Artifacts(id, params, callback)
octopus.prototype.Artifacts - Artifacts

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,regarding} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Channels"></a>

### octopus.Channels(id, callback)
octopus.prototype.Channels - Channels

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Certificates"></a>

### octopus.Certificates(id, params, callback)
octopus.prototype.Certificates - Certificates

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+CurrentUser"></a>

### octopus.CurrentUser(callback)
octopus.prototype.CurrentUser - CurrentUser

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+CurrentLicense"></a>

### octopus.CurrentLicense(callback)
octopus.prototype.CurrentLicense - CurrentLicense

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Dashboard"></a>

### octopus.Dashboard(callback)
octopus.prototype.Dashboard - Dashboard

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+DashboardConfiguration"></a>

### octopus.DashboardConfiguration(callback)
octopus.prototype.DashboardConfiguration - DashboardConfiguration

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+DashboardDynamic"></a>

### octopus.DashboardDynamic(params, callback)
octopus.prototype.DashboardDynamic - DashboardDynamic

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {projects,environments,includePrevious} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+DeploymentProcesses"></a>

### octopus.DeploymentProcesses(id, callback)
octopus.prototype.DeploymentProcesses - DeploymentProcesses

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Deployments"></a>

### octopus.Deployments(id, params, callback)
octopus.prototype.Deployments - Deployments

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,take,projects,environments,taskState} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+DiscoverMachine"></a>

### octopus.DiscoverMachine(params, callback)
octopus.prototype.DiscoverMachine - DiscoverMachine

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {host,port,type} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Environments"></a>

### octopus.Environments(id, params, callback)
octopus.prototype.Environments - Environments

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+EnvironmentSortOrder"></a>

### octopus.EnvironmentSortOrder(callback)
octopus.prototype.EnvironmentSortOrder - EnvironmentSortOrder

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Events"></a>

### octopus.Events(id, params, callback)
octopus.prototype.Events - Events

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,regarding,modifier,user,from,to} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+ExternalSecurityGroups"></a>

### octopus.ExternalSecurityGroups(id, params, callback)
octopus.prototype.ExternalSecurityGroups - ExternalSecurityGroups

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {name} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Feeds"></a>

### octopus.Feeds(id, params, callback)
octopus.prototype.Feeds - Feeds

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Interruptions"></a>

### octopus.Interruptions(id, params, callback)
octopus.prototype.Interruptions - Interruptions

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,regarding,pendingOnly} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Invitations"></a>

### octopus.Invitations(callback)
octopus.prototype.Invitations - Invitations

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+LibraryVariables"></a>

### octopus.LibraryVariables(id, params, callback)
octopus.prototype.LibraryVariables - LibraryVariables

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,contentType} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Lifecycles"></a>

### octopus.Lifecycles(id, params, callback)
octopus.prototype.Lifecycles - Lifecycles

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+MachineRoles"></a>

### octopus.MachineRoles(callback)
octopus.prototype.MachineRoles - MachineRoles

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Machines"></a>

### octopus.Machines(id, params, callback)
octopus.prototype.Machines - Machines

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,thumbprint} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+MaintenanceConfiguration"></a>

### octopus.MaintenanceConfiguration(callback)
octopus.prototype.MaintenanceConfiguration - MaintenanceConfiguration

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+OctopusServerNodes"></a>

### octopus.OctopusServerNodes(id, callback)
octopus.prototype.OctopusServerNodes - OctopusServerNodes

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Packages"></a>

### octopus.Packages(id, params, callback)
octopus.prototype.Packages - Packages

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {nuGetPackageId,filter,latest,skip,take,includeNotes} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+PackagesBulk"></a>

### octopus.PackagesBulk(params, callback)
octopus.prototype.PackagesBulk - PackagesBulk

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {ids} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+PackageUpload"></a>

### octopus.PackageUpload(params, callback)
octopus.prototype.PackageUpload - PackageUpload

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {replace} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+ProjectGroups"></a>

### octopus.ProjectGroups(id, params, callback)
octopus.prototype.ProjectGroups - ProjectGroups

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Projects"></a>

### octopus.Projects(id, params, callback)
octopus.prototype.Projects - Projects

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,clone} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+ProjectPulse"></a>

### octopus.ProjectPulse(params, callback)
octopus.prototype.ProjectPulse - ProjectPulse

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {projectIds} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Register"></a>

### octopus.Register(callback)
octopus.prototype.Register - Register

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Releases"></a>

### octopus.Releases(id, params, callback)
octopus.prototype.Releases - Releases

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,ignoreChannelRules} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+ServerStatus"></a>

### octopus.ServerStatus(callback)
octopus.prototype.ServerStatus - ServerStatus

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+SignIn"></a>

### octopus.SignIn(params, callback)
octopus.prototype.SignIn - SignIn

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {returnUrl} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+SignOut"></a>

### octopus.SignOut(callback)
octopus.prototype.SignOut - SignOut

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+RetentionPolicies"></a>

### octopus.RetentionPolicies(id, params, callback)
octopus.prototype.RetentionPolicies - RetentionPolicies

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+SmtpConfiguration"></a>

### octopus.SmtpConfiguration(callback)
octopus.prototype.SmtpConfiguration - SmtpConfiguration

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Tasks"></a>

### octopus.Tasks(id, params, callback)
octopus.prototype.Tasks - Tasks

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip,active,environment,project,name,node,running} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Teams"></a>

### octopus.Teams(id, params, callback)
octopus.prototype.Teams - Teams

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+UserRoles"></a>

### octopus.UserRoles(id, params, callback)
octopus.prototype.UserRoles - UserRoles

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Users"></a>

### octopus.Users(id, params, callback)
octopus.prototype.Users - Users

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| params | <code>object</code> | extra params {skip} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+PermissionDescriptions"></a>

### octopus.PermissionDescriptions(callback)
octopus.prototype.PermissionDescriptions - PermissionDescriptions

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Variables"></a>

### octopus.Variables(id, callback)
octopus.prototype.Variables - Variables

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+VariableNames"></a>

### octopus.VariableNames(params, callback)
octopus.prototype.VariableNames - VariableNames

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {project} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+VariablesNonPrintableChars"></a>

### octopus.VariablesNonPrintableChars(callback)
octopus.prototype.VariablesNonPrintableChars - VariablesNonPrintableChars

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+VersionRuleTest"></a>

### octopus.VersionRuleTest(params, callback)
octopus.prototype.VersionRuleTest - VersionRuleTest

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {version,versionRange,preReleaseTag} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+ReportingDeploymentsCountedByWeek"></a>

### octopus.ReportingDeploymentsCountedByWeek(params, callback)
octopus.prototype.ReportingDeploymentsCountedByWeek - ReportingDeploymentsCountedByWeek

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | extra params {projectIds} |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+RepositoryConfiguration"></a>

### octopus.RepositoryConfiguration(callback)
octopus.prototype.RepositoryConfiguration - RepositoryConfiguration

**Kind**: instance method of <code>[octopus](#octopus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>[callback](#callback)</code> | A callback to run. |

<a name="octopus+Web"></a>

### octopus.Web(callback)
octopus.prototype.Web - Web

**Kind**: instance method of <code>[octopus](#octopus)</code>  

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

