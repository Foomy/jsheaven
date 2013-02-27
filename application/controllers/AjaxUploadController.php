<?php

class AjaxUploadController extends Zend_Controller_Action
{

	public function init()
	{
		$this->view->headScript()->appendFile('/js/ajax-upload.js', 'text/javascript');
	}

	public function indexAction()
	{
	}
}
