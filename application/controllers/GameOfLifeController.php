<?php

class GameOfLifeController extends Zend_Controller_Action
{
	public function init()
	{
		$this->view->headScript()->appendFile('/js/GameOfLife.js', 'text/javascript');
	}

	public function indexAction()
	{

	}
}

/**
 *  "Let me know if there's some other way we can screw up tonight."
 *  (James T. Kirk, Star Trek VI - The Undiscovered Country)
 */
