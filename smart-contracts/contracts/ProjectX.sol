pragma solidity ^0.6.0;

contract ProjectX {

  enum ProjectStatus {
      CLOSED,
      OPEN
  }

  struct Project {
    string title;
    string description;
    address owner;
    ProjectStatus status;
    address[] contributors;
    uint256 ethContributions;
  }

  mapping(uint256 => Project) public projects;

  uint256 public projectsCount;

  event ProjectCreated(string _title, uint256 _projectId, address _owner);
  event ContributionsAdded(uint256 _projectId, address _sender, uint256 _amount);

  constructor() public {

  }

  function createProject(string calldata _title, string calldata _description) external returns(uint256) {
    uint256 _projectId = projectsCount + 1;
    projects[_projectId].title = _title;
    projects[_projectId].description = _description;
    projects[_projectId].owner = msg.sender;
    projects[_projectId].status = ProjectStatus.OPEN;

    emit ProjectCreated(_title, _projectId, msg.sender);

    return _projectId;
  }

  function contributeEther(uint256 _projectId) external payable {
    require(projects[_projectId].status == ProjectStatus.OPEN, "Project is either closed or doesnt exists");
    projects[_projectId].ethContributions += msg.value;

    emit ContributionsAdded(_projectId, msg.sender, msg.value);
  }

  function releaseFunds() external {

  }

  function getProjectDetails(uint256 _projectId) public view returns(string memory, string memory, address, uint8, uint256) {
    return(projects[_projectId].title, projects[_projectId].description, projects[_projectId].owner, uint8(projects[_projectId].status), projects[_projectId].ethContributions);
  }
}
