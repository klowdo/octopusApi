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
function octopus(actopusurl, apikey) {
  this.actopusurl = actopusurl;
  this.apikey = apikey;
  var self = this;


  /**
   * octopus.prototype.Self - Self
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Self = function(callback) {
    var params = {};
    get('/api', callback);
  };


  /**
   * octopus.prototype.Accounts - Accounts
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Accounts = function(id, params, callback) {
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
   * octopus.prototype.ActionTemplates - ActionTemplates
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.ActionTemplates = function(id, params, callback) {
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
   * octopus.prototype.Alerts - Alerts
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Alerts = function(id, params, callback) {
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
   * octopus.prototype.Artifacts - Artifacts
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,regarding}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Artifacts = function(id, params, callback) {
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
   * octopus.prototype.Channels - Channels
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Channels = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/channels', params, callback);
  };


  /**
   * octopus.prototype.Certificates - Certificates
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Certificates = function(id, params, callback) {
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
   * octopus.prototype.CurrentUser - CurrentUser
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.CurrentUser = function(callback) {
    var params = {};
    get('/api/users/me', callback);
  };


  /**
   * octopus.prototype.CurrentLicense - CurrentLicense
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.CurrentLicense = function(callback) {
    var params = {};
    get('/api/licenses/licenses-current', callback);
  };


  /**
   * octopus.prototype.Dashboard - Dashboard
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Dashboard = function(callback) {
    var params = {};
    get('/api/dashboard', callback);
  };


  /**
   * octopus.prototype.DashboardConfiguration - DashboardConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.DashboardConfiguration = function(callback) {
    var params = {};
    get('/api/dashboardconfiguration', callback);
  };


  /**
   * octopus.prototype.DashboardDynamic - DashboardDynamic
   *
   * @param  {object} params -    extra params {projects,environments,includePrevious}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.DashboardDynamic = function(params, callback) {
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
   * octopus.prototype.DeploymentProcesses - DeploymentProcesses
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.DeploymentProcesses = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/deploymentprocesses', params, callback);
  };


  /**
   * octopus.prototype.Deployments - Deployments
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,take,projects,environments,taskState}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Deployments = function(id, params, callback) {
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
   * octopus.prototype.DiscoverMachine - DiscoverMachine
   *
   * @param  {object} params -    extra params {host,port,type}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.DiscoverMachine = function(params, callback) {
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
   * octopus.prototype.Environments - Environments
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Environments = function(id, params, callback) {
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
   * octopus.prototype.EnvironmentSortOrder - EnvironmentSortOrder
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.EnvironmentSortOrder = function(callback) {
    var params = {};
    get('/api/environments/sortorder', callback);
  };


  /**
   * octopus.prototype.Events - Events
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,regarding,modifier,user,from,to}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Events = function(id, params, callback) {
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
   * octopus.prototype.ExternalSecurityGroups - ExternalSecurityGroups
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {name}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.ExternalSecurityGroups = function(id, params, callback) {
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
   * octopus.prototype.Feeds - Feeds
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Feeds = function(id, params, callback) {
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
   * octopus.prototype.Interruptions - Interruptions
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,regarding,pendingOnly}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Interruptions = function(id, params, callback) {
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
   * octopus.prototype.Invitations - Invitations
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Invitations = function(callback) {
    var params = {};
    get('/api/users/invitations', callback);
  };


  /**
   * octopus.prototype.LibraryVariables - LibraryVariables
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,contentType}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.LibraryVariables = function(id, params, callback) {
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
   * octopus.prototype.Lifecycles - Lifecycles
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Lifecycles = function(id, params, callback) {
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
   * octopus.prototype.MachineRoles - MachineRoles
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.MachineRoles = function(callback) {
    var params = {};
    get('/api/machineroles/all', callback);
  };


  /**
   * octopus.prototype.Machines - Machines
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,thumbprint}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Machines = function(id, params, callback) {
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
   * octopus.prototype.MaintenanceConfiguration - MaintenanceConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.MaintenanceConfiguration = function(callback) {
    var params = {};
    get('/api/maintenanceconfiguration', callback);
  };


  /**
   * octopus.prototype.OctopusServerNodes - OctopusServerNodes
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.OctopusServerNodes = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/octopusservernodes', params, callback);
  };


  /**
   * octopus.prototype.Packages - Packages
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {nuGetPackageId,filter,latest,skip,take,includeNotes}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Packages = function(id, params, callback) {
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
   * octopus.prototype.PackagesBulk - PackagesBulk
   *
   * @param  {object} params -    extra params {ids}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.PackagesBulk = function(params, callback) {
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
   * octopus.prototype.PackageUpload - PackageUpload
   *
   * @param  {object} params -    extra params {replace}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.PackageUpload = function(params, callback) {
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
   * octopus.prototype.ProjectGroups - ProjectGroups
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.ProjectGroups = function(id, params, callback) {
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
   * octopus.prototype.Projects - Projects
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,clone}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Projects = function(id, params, callback) {
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
   * octopus.prototype.ProjectPulse - ProjectPulse
   *
   * @param  {object} params -    extra params {projectIds}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.ProjectPulse = function(params, callback) {
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
   * octopus.prototype.Register - Register
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Register = function(callback) {
    var params = {};
    get('/api/users/register', callback);
  };


  /**
   * octopus.prototype.Releases - Releases
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,ignoreChannelRules}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Releases = function(id, params, callback) {
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
   * octopus.prototype.ServerStatus - ServerStatus
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.ServerStatus = function(callback) {
    var params = {};
    get('/api/serverstatus', callback);
  };


  /**
   * octopus.prototype.SignIn - SignIn
   *
   * @param  {object} params -    extra params {returnUrl}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.SignIn = function(params, callback) {
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
   * octopus.prototype.SignOut - SignOut
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.SignOut = function(callback) {
    var params = {};
    get('/api/users/logout', callback);
  };


  /**
   * octopus.prototype.RetentionPolicies - RetentionPolicies
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.RetentionPolicies = function(id, params, callback) {
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
   * octopus.prototype.SmtpConfiguration - SmtpConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.SmtpConfiguration = function(callback) {
    var params = {};
    get('/api/smtpconfiguration', callback);
  };


  /**
   * octopus.prototype.Tasks - Tasks
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip,active,environment,project,name,node,running}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Tasks = function(id, params, callback) {
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
   * octopus.prototype.Teams - Teams
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Teams = function(id, params, callback) {
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
   * octopus.prototype.UserRoles - UserRoles
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.UserRoles = function(id, params, callback) {
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
   * octopus.prototype.Users - Users
   *
   * @param  {string} id    -   id
   * @param  {object} params -    extra params {skip}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Users = function(id, params, callback) {
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
   * octopus.prototype.PermissionDescriptions - PermissionDescriptions
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.PermissionDescriptions = function(callback) {
    var params = {};
    get('/api/permissions/all', callback);
  };


  /**
   * octopus.prototype.Variables - Variables
   *
   * @param  {string} id    -   id
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Variables = function(id, callback) {
    var params = {};
    typeof id == 'function' ? callback = id : params.id = id;
    get('/api/variables', params, callback);
  };


  /**
   * octopus.prototype.VariableNames - VariableNames
   *
   * @param  {object} params -    extra params {project}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.VariableNames = function(params, callback) {
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
   * octopus.prototype.VariablesNonPrintableChars - VariablesNonPrintableChars
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.VariablesNonPrintableChars = function(callback) {
    var params = {};
    get('/api/variables/nonPrintableChars', callback);
  };


  /**
   * octopus.prototype.VersionRuleTest - VersionRuleTest
   *
   * @param  {object} params -    extra params {version,versionRange,preReleaseTag}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.VersionRuleTest = function(params, callback) {
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
   * octopus.prototype.ReportingDeploymentsCountedByWeek - ReportingDeploymentsCountedByWeek
   *
   * @param  {object} params -    extra params {projectIds}
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.ReportingDeploymentsCountedByWeek = function(params, callback) {
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
   * octopus.prototype.RepositoryConfiguration - RepositoryConfiguration
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.RepositoryConfiguration = function(callback) {
    var params = {};
    get('/api/repository/configuration', callback);
  };


  /**
   * octopus.prototype.Web - Web
   *
   * @param {callback} callback - A callback to run.
   */
  octopus.prototype.Web = function(callback) {
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

module.exports = octopus;