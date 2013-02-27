<?php

class MinitestController extends Zend_Controller_Action
{
	public function init()
	{
		$this->view->headScript()->appendFile('/js/Minitest.js', 'text/javascript');
		$this->view->headLink()->appendStylesheet('/skins/default/css/minitest.css') . PHP_EOL;
	}

	public function indexAction()
	{
	}

	public function keymapTestAction()
	{
	}
}

/**
 *  "Let me know if there's some other way we can screw up tonight."
 *  (James T. Kirk, Star Trek VI - The Undiscovered Country)
 */