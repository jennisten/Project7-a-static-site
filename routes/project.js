//require express and declare router
const express = require('express');
const router = express.Router();

//require json data from the root of the directory
const  data = require('../data.json');
const projects = data.projects;

//within the 'project' route, create data template to be injeccted when rendering the project.pug file
router.get('/:id', (req, res) => {
	const { id } = req.params;
    if (id <= projects.length) {
      const projectName = projects[id].project_name;
      const projectDescription = projects[id].description;
      const projectTechnologies = projects[id].technologies;
      const liveLink = projects[id].live_link;
      const githubLink = projects[id].github_link;
      const projectImage = projects[id].image_urls;
	  const projectData = { projectName, projectDescription, projectTechnologies, liveLink,  githubLink, projectImage};
      res.render('project', projectData);
   }
});

module.exports = router;
