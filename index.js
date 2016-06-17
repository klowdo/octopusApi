var request = require('request');
var querystring = require('querystring');
/**
 * Callback for request.
 *
 * @callback callback
 * @param {object} err - An object.
 * @param {object} body - An object.
 */


/**
 * octopus - description
 *
 * @param  {string} actopusurl - octopus-deploy-url
 * @param  {string} apikey     - apikey
 */
function octopusapi(actopusurl, apikey) {
  this.actopusurl = actopusurl;
  this.apikey = apikey;
  var self = this;


  /**
   * octopusapi.prototype.Self - Self
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Self = function(callback) {
    var params = {};
    get('/api', callback);
  };


  /**
   * octopusapi.prototype.Accounts - Accounts
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Accounts = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/accounts', params, callback);
  };


  /**
   * octopusapi.prototype.ActionTemplates - ActionTemplates
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.ActionTemplates = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/actiontemplates', params, callback);
  };


  /**
   * octopusapi.prototype.Alerts - Alerts
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Alerts = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/alerts', params, callback);
  };


  /**
   * octopusapi.prototype.Artifacts - Artifacts
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,regarding}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Artifacts = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/artifacts', params, callback);
  };


  /**
   * octopusapi.prototype.Channels - Channels
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Channels = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/channels', params, callback);
  };


  /**
   * octopusapi.prototype.Certificates - Certificates
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Certificates = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/certificates', params, callback);
  };


  /**
   * octopusapi.prototype.CurrentUser - CurrentUser
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.CurrentUser = function(callback) {
    var params = {};
    get('/api/users/me', callback);
  };


  /**
   * octopusapi.prototype.CurrentLicense - CurrentLicense
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.CurrentLicense = function(callback) {
    var params = {};
    get('/api/licenses/licenses-current', callback);
  };


  /**
   * octopusapi.prototype.Dashboard - Dashboard
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Dashboard = function(callback) {
    var params = {};
    get('/api/dashboard', callback);
  };


  /**
   * octopusapi.prototype.DashboardConfiguration - DashboardConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.DashboardConfiguration = function(callback) {
    var params = {};
    get('/api/dashboardconfiguration', callback);
  };


  /**
   * octopusapi.prototype.DashboardDynamic - DashboardDynamic
   *
   * @param  {object} params -    extra params {projects,environments,includePrevious}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.DashboardDynamic = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/dashboard/dynamic', params, callback);
  };


  /**
   * octopusapi.prototype.DeploymentProcesses - DeploymentProcesses
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.DeploymentProcesses = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/deploymentprocesses', params, callback);
  };


  /**
   * octopusapi.prototype.Deployments - Deployments
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,take,projects,environments,taskState}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Deployments = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/deployments', params, callback);
  };


  /**
   * octopusapi.prototype.DiscoverMachine - DiscoverMachine
   *
   * @param  {object} params -    extra params {host,port,type}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.DiscoverMachine = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/machines/discover', params, callback);
  };


  /**
   * octopusapi.prototype.Environments - Environments
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Environments = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/environments', params, callback);
  };


  /**
   * octopusapi.prototype.EnvironmentSortOrder - EnvironmentSortOrder
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.EnvironmentSortOrder = function(callback) {
    var params = {};
    get('/api/environments/sortorder', callback);
  };


  /**
   * octopusapi.prototype.Events - Events
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,regarding,modifier,user,from,to}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Events = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/events', params, callback);
  };


  /**
   * octopusapi.prototype.ExternalSecurityGroups - ExternalSecurityGroups
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {name}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.ExternalSecurityGroups = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/externalsecuritygroups', params, callback);
  };


  /**
   * octopusapi.prototype.Feeds - Feeds
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Feeds = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/feeds', params, callback);
  };


  /**
   * octopusapi.prototype.Interruptions - Interruptions
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,regarding,pendingOnly}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Interruptions = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/interruptions', params, callback);
  };


  /**
   * octopusapi.prototype.Invitations - Invitations
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Invitations = function(callback) {
    var params = {};
    get('/api/users/invitations', callback);
  };


  /**
   * octopusapi.prototype.LibraryVariables - LibraryVariables
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,contentType}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.LibraryVariables = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/libraryvariablesets', params, callback);
  };


  /**
   * octopusapi.prototype.Lifecycles - Lifecycles
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Lifecycles = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/lifecycles', params, callback);
  };


  /**
   * octopusapi.prototype.MachineRoles - MachineRoles
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.MachineRoles = function(callback) {
    var params = {};
    get('/api/machineroles/all', callback);
  };


  /**
   * octopusapi.prototype.Machines - Machines
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,thumbprint}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Machines = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/machines', params, callback);
  };


  /**
   * octopusapi.prototype.MaintenanceConfiguration - MaintenanceConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.MaintenanceConfiguration = function(callback) {
    var params = {};
    get('/api/maintenanceconfiguration', callback);
  };


  /**
   * octopusapi.prototype.OctopusServerNodes - OctopusServerNodes
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.OctopusServerNodes = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/octopusservernodes', params, callback);
  };


  /**
   * octopusapi.prototype.Packages - Packages
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {nuGetPackageId,filter,latest,skip,take,includeNotes}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Packages = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/packages', params, callback);
  };


  /**
   * octopusapi.prototype.PackagesBulk - PackagesBulk
   *
   * @param  {object} params -    extra params {ids}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.PackagesBulk = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/packages/bulk', params, callback);
  };


  /**
   * octopusapi.prototype.PackageUpload - PackageUpload
   *
   * @param  {object} params -    extra params {replace}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.PackageUpload = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/packages/raw', params, callback);
  };


  /**
   * octopusapi.prototype.ProjectGroups - ProjectGroups
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.ProjectGroups = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/projectgroups', params, callback);
  };


  /**
   * octopusapi.prototype.Projects - Projects
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,clone}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Projects = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/projects', params, callback);
  };


  /**
   * octopusapi.prototype.ProjectPulse - ProjectPulse
   *
   * @param  {object} params -    extra params {projectIds}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.ProjectPulse = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/projects/pulse', params, callback);
  };


  /**
   * octopusapi.prototype.Register - Register
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Register = function(callback) {
    var params = {};
    get('/api/users/register', callback);
  };


  /**
   * octopusapi.prototype.Releases - Releases
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,ignoreChannelRules}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Releases = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/releases', params, callback);
  };


  /**
   * octopusapi.prototype.ServerStatus - ServerStatus
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.ServerStatus = function(callback) {
    var params = {};
    get('/api/serverstatus', callback);
  };


  /**
   * octopusapi.prototype.SignIn - SignIn
   *
   * @param  {object} params -    extra params {returnUrl}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.SignIn = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/users/login', params, callback);
  };


  /**
   * octopusapi.prototype.SignOut - SignOut
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.SignOut = function(callback) {
    var params = {};
    get('/api/users/logout', callback);
  };


  /**
   * octopusapi.prototype.RetentionPolicies - RetentionPolicies
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.RetentionPolicies = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/retentionpolicies', params, callback);
  };


  /**
   * octopusapi.prototype.SmtpConfiguration - SmtpConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.SmtpConfiguration = function(callback) {
    var params = {};
    get('/api/smtpconfiguration', callback);
  };


  /**
   * octopusapi.prototype.Tasks - Tasks
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,active,environment,project,name,node,running}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Tasks = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/tasks', params, callback);
  };


  /**
   * octopusapi.prototype.Teams - Teams
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Teams = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/teams', params, callback);
  };


  /**
   * octopusapi.prototype.UserRoles - UserRoles
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.UserRoles = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/userroles', params, callback);
  };


  /**
   * octopusapi.prototype.Users - Users
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Users = function(id, params, callback) {
    typeof id == 'function' ? callback = id : params.id = id;
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/users', params, callback);
  };


  /**
   * octopusapi.prototype.PermissionDescriptions - PermissionDescriptions
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.PermissionDescriptions = function(callback) {
    var params = {};
    get('/api/permissions/all', callback);
  };


  /**
   * octopusapi.prototype.Variables - Variables
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Variables = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/variables', params, callback);
  };


  /**
   * octopusapi.prototype.VariableNames - VariableNames
   *
   * @param  {object} params -    extra params {project}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.VariableNames = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/variables/names', params, callback);
  };


  /**
   * octopusapi.prototype.VariablesNonPrintableChars - VariablesNonPrintableChars
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.VariablesNonPrintableChars = function(callback) {
    var params = {};
    get('/api/variables/nonPrintableChars', callback);
  };


  /**
   * octopusapi.prototype.VersionRuleTest - VersionRuleTest
   *
   * @param  {object} params -    extra params {version,versionRange,preReleaseTag}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.VersionRuleTest = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/channels/rule-test', params, callback);
  };


  /**
   * octopusapi.prototype.ReportingDeploymentsCountedByWeek - ReportingDeploymentsCountedByWeek
   *
   * @param  {object} params -    extra params {projectIds}
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.ReportingDeploymentsCountedByWeek = function(params, callback) {
    if (params == null) {
      params = {}
    } else {
      if (typeof params == 'function') {
        callback = params;
      }
    }
    get('/api/reporting/deployments-counted-by-week', params, callback);
  };


  /**
   * octopusapi.prototype.RepositoryConfiguration - RepositoryConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.RepositoryConfiguration = function(callback) {
    var params = {};
    get('/api/repository/configuration', callback);
  };


  /**
   * octopusapi.prototype.Web - Web
   *
   * @param {callback} callback - A callback to run.
   */
  octopusapi.prototype.Web = function(callback) {
    var params = {};
    get('/app', callback);
  };

  function get(url, params, callback) {
    url = self.actopusurl + url;
    if (typeof params == 'function') {
      callback = params;
    } else {
      if (params.id) url += '/' + params.id;
      delete params.id;
      url += querystring.stringify(params);
    }
    request({
      url,
      headers: {
        'X-Octopus-ApiKey': self.apikey
      }
    }, function(error, response, body) {
      callback(error, body)
    })
  }

}

module.exports = octopusapi;